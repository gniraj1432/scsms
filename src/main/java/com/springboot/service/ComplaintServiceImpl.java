package com.springboot.service;

import com.springboot.model.Complaint;
import com.springboot.repository.ComplaintRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;

@Service
public class ComplaintServiceImpl implements ComplaintService {

    @Autowired
    private ComplaintRepository complaintRepository;

    private final String uploadDir = "uploads/";

    public ComplaintServiceImpl() throws IOException {
        Path path = Paths.get(uploadDir);
        if (!Files.exists(path)) {
            Files.createDirectories(path);
        }
    }

    @Override
    public Complaint registerComplaint(Complaint complaint, MultipartFile photo) throws IOException {
        // Save photo to the server
        if (photo != null && !photo.isEmpty()) {
            byte[] bytes = photo.getBytes();
            String fileName = "photo_" + System.currentTimeMillis() + ".jpg";
            Path path = Paths.get(uploadDir + fileName);
            Files.write(path, bytes);
//            complaint.setPhotoPath(path.toString());
            complaint.setPhotoPath("uploads/"+fileName);
        }

        // Save complaint to the database
        return complaintRepository.save(complaint);
    }

    @Override
    public List<Complaint> getAllComplaints() {
        return complaintRepository.findAll();
    }
    
    // Update complaint status by ID
    @Override
    public Complaint updateComplaintStatus(Long id, Complaint complaint) {
        Optional<Complaint> existingComplaint = complaintRepository.findById(id);
        if (existingComplaint.isPresent()) {
            Complaint updatedComplaint = existingComplaint.get();
            updatedComplaint.setStatus(complaint.getStatus());
            return complaintRepository.save(updatedComplaint);
        } else {
            throw new RuntimeException("Complaint not found");
        }
    }

    // Get a specific complaint by ID
    @Override
    public Complaint getComplaintById(Long id) {
        return complaintRepository.findById(id).orElseThrow(() -> new RuntimeException("Complaint not found"));
    }
}
